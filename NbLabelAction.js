var NbLabelAction = (function() {
'use strict';
	
	var isInited		= false;
	var regLabel		= /^(@click|[a-zA-Z][-_a-zA-Z0-9]*):([psm]\.|)(<<|<|\||>|#?.*)$/;
	var regExtension	= /^#([a-zA-Z0-9][-_a-zA-Z0-9]*)(|\(([^)]*)\))$/;
	var BASENAME_CLICK	= '@click';
	var TARGET_PARENT	= 'p.';
	var TARGET_STAGE	= 's.';
	var TARGET_ME		= 'm.'
	var EXTEND_SIGN		= '#'
	var ACTION_HEAD		= '<';
	var ACTION_STOP		= '|';
	var ACTION_NEXT		= '>';
	var ACTION_PREV		= '<<';

	var isDebug			= true;
	
	// --------- 内部利用メソッド --------- //
		
	/**
	 * 現在のラベルのインデックスを返します。
	 * @param	mc 対象のMovieClip
	 * @return	num	ラベルのインデックス。ラベルがない場合、-1
	 */
	var currentLabelIndex		= function(mc){
		var crLabel		= mc.currentLabel;
		var labels		= mc.getLabels();
		var index		= -1;
		for(var i=0;i<labels.length;i++){
			if(labels[i].label == crLabel){
				index		= i;
				break;
			}
		}
		return index;
	}
	/**
	 * 一つ前のラベルを返します。
	 * ラベルが存在しない、または現在のラベルが先頭である場合、空文字を返します。
	 * @param mc		対象のMovieClip
	 * @return string	一つ前のラベル
	 */
	var findPrevLabel		= function(mc){
		var index		= currentLabelIndex(mc);
		var prevLabel	= (index >= 1)?mc.getLabels()[index-1].label:'';
		return prevLabel;
	}
	/**
	 * 次のラベルを返します。
	 * ラベルが存在しない、または現在のラベルが最後である場合、空文字を返します。
	 * @param mc		対象のMovieClip
	 * @return string	次のラベル
	 */
	var findNextLabel		= function(mc){
		var index		= currentLabelIndex(mc);
		var labels		= mc.getLabels();
		var nextLabel	= (index < labels.length-1)?labels[index+1].label:'';
		return nextLabel;
	}
	/**
	 * 対象のMCからラベルのベース文字列（"foo:<"の"foo"部分）を元にラベル文字列全体を返します。
	 * 複数マッチする場合は先頭のものを返します。見つからない場合は空文字を返します。
	 * @param	mc 検索するMovieClip
	 * @param	base ベース文字列
	 * @return	マッチしたラベル全体
	 */
	var findLabelWithBase	= function(mc,base){
		var lbs		= mc.getLabels();
		for(var i=0;i<lbs.length;i++){
			var lb 	= lbs[i].label;
			if(lb == base){return lb}
			var parts		= lb.match(regLabel);
			if(parts && parts[1] == base){
				return lb;
			}
		}
		return '';
	}
	/**
	 * ラベルのフレーム番号を返します
	 * @param mc	対象のMovieClip
	 * @param label 検索するラベル
	 * @return num ラベルのフレーム番号。見つからない場合、-1
	 */
	var getLabelPos		= function(mc,label){
		var lbs		= mc.getLabels();
		for(var i=0;i<lbs.length;i++){
			var lb 	= lbs[i].label;
			if(lb == label){return lbs[i].position}
		}
		return -1;
	}
	
	// --------- LabelAction class --------- //
	
	var LabelAction	 = function(){
		this.create.apply(this,arguments);
	};
	/**
	 * 有効なActionLabelの形式であるか判定します
	 * @param	 label
	 * @return	boolean	 有効なActionLabelならtrue
	 */
	LabelAction.isValidActionLabel	= function(label){
		return regLabel.test(label);
	}
	LabelAction.prototype = {
		/** このラベルの名前本体 */
		 baseName	:	''
		/** このラベル終了時のアクション。ACTION_*定数のいずれか、または単に移動先ラベル名 */
		,action		:	''
		/** アクションを実行する場合のターゲット。TARGET_*定数のいずれか */
		,target		:	''
		
		/**
		 * ラベル文字列を元にインスタンスを生成します。
		 * ラベルとして渡された文字列が不正な場合、例外をスローします。
		 * あらかじめLabelAction.isValidActionLabelで検査してください。
		 * このチェックは、あくまでラベルの文字列形式が正しいかどうかのみをチェックします。
		 * この段階ではラベルの置かれたMovieClipを受け取らないため、移動先のラベルが存在するかどうか、等は検査されません。
		 * @param	label	ActionLabelとして有効なラベル文字列
		 */
		,create		:	 function(label){
			if(!LabelAction.isValidActionLabel(label)){throw("invalid label : "+label)}
			var part		= label.match(regLabel);
			var labelName 	= part[1];
			var target		= part[2] || TARGET_ME;
			var action		= part[3];
			
			this.baseName		= labelName;
			this.action			= action;
			this.target			= target;
			isDebug?console.log("ActionLabel:",labelName,action,target):null;
		}	
		
		/**
		 * 指定されたMovieClipに対して、アクションを実行します。
		 * アクションのターゲットが親またはステージである場合、結果として
		 * 親やステージに対してフレーム位置の変更が発生することに注意してください。
		 * @param mc	アクションを実行するMovieClip。通常はこのアクションの元となったラベルが配置されているMovieClipです。
		 */
		,doAction		:	function(mc){
			var targetMc		= mc;
			var labelToGo,extendPart,extFName,extFParam,extRet;
			if(this.target == TARGET_PARENT){targetMc	= mc.parent}
			if(this.target == TARGET_STAGE){targetMc	= stage.children[0]}
			switch (this.action) {
				case ACTION_HEAD:
					targetMc.gotoAndPlay(targetMc.currentLabel);
					break;
				case ACTION_PREV:
					targetMc.gotoAndPlay(findPrevLabel(targetMc));
					break;
				case ACTION_NEXT:
					targetMc.gotoAndPlay(findNextLabel(targetMc));
					break;
				case ACTION_STOP:
					targetMc.stop();
					break;
				default:
					if(this.action.charAt(0) == EXTEND_SIGN){
						// 拡張メソッドの呼び出し
						extendPart		= this.action.match(regExtension);
						if(extendPart){
							extFName		= extendPart[1];
							extFParam		= extendPart[3];
							if(NbLabelAction.extension[extFName]){
								extRet			= NbLabelAction.extension[extFName].apply(targetMc,[extFParam]);
								labelToGo		= findLabelWithBase(targetMc,extRet);
								if(extRet && !labelToGo){
									console.warn("extension : " + extFName + " return value:" + extRet + ". But it is " ,mc);
								}
							}else{
								console.warn("invalid label : extension " + extFName + " is not defined.",this.action,mc);
							}
						}else{
							console.warn("invalid label format: " + this.action,mc);
						}
					}else{
						labelToGo		= findLabelWithBase(targetMc,this.action);
						if(!labelToGo){
							console.warn("label not found : " + this.action,mc);
						}
					}
					
					//ラベルへのジャンプ
					if(labelToGo){
						targetMc.gotoAndPlay(labelToGo);
					}
					
			}
		}
		
		
	};
	
	// --------- NbLabelAction --------- //

	return {
		/**
		 * ステージ上の全てのMovieClipを巡回してアクションラベルを初期化します。
		 * この処理は通常、ステージのロードまたはステージ1フレーム目のアクションから呼び出します。
		 * 2回目以降の呼び出しに対しては何も行いません。
		 */
		init			:	 function(){
			if(isInited){return}
			isInited = true;
			var root		= stage.children[0];
			var checkedMcs	= [];
			
			/**
			 * 指定されたMCに対してラベルの解析とtickの設定を行います
			 */
			var initForMc	= function(mc){
				var labels			= mc.getLabels();
				var hasAction		= false; //監視の必要があるか
				var label2action	= {}; //label->LabelAction
				for(var i=0;i<labels.length;i++){
					var label = labels[i].label;
					if(LabelAction.isValidActionLabel(label)){
						var la 			= new LabelAction(label);
						hasAction		|= !!la.action;
						label2action[label]	= la;
						//イベントラベル
						if(la.baseName == BASENAME_CLICK){
							mc.addEventListener('click',function(mc,label,evt){
								mc.gotoAndPlay(label);
								evt.stopPropagation();
								isDebug?console.log("gotoAndPlay:",label):null;
							}.bind(this,mc,label));
						}
					}
					
				}
				//tick監視
				if(hasAction){
					mc.addEventListener('tick',function(){
						//フレームの最後か判断
						var isLast		= false;
						var crFrame		= this.currentFrame;
						var nextLabel	= findNextLabel(this);
						if(nextLabel){
							isLast		= crFrame+1 == getLabelPos(this,nextLabel);
						}else{
							//次のラベルがない
							isLast		= crFrame+1 == mc.duration;
						}
						if(isLast){
							//現在のラベルに対するアクションを取得
							var la 		= label2action[this.currentLabel];
							if(la){
								la.doAction(this);
							}
						}
						
					}.bind(mc));
				}
				
			}
			
			//rootから再帰的にMCを探索
			var walkMcTree		= function(mc){
				//同じMovieClipの再巡回防止
				if(checkedMcs.indexOf(mc) != -1){return}
				checkedMcs.push(mc);
				
				var ks		= Object.keys(mc);
				for(var i=0; i<ks.length; i++){
					if(mc.hasOwnProperty(ks[i]) && mc[ks[i]] instanceof createjs.MovieClip){
						walkMcTree(mc[ks[i]]);
					}
				}
				
				initForMc(mc);
			}
			walkMcTree(root);
			checkedMcs.length	= 0;
		}
		
		/**
		 * 拡張スクリプトをセットするオブジェクトです。
		 * 初期状態では何もセットされていません。
		 * この名前空間に任意の関数をセットすることで、アクションラベルから任意の処理を呼び出せるようになります。
		 * 設定形式：
		 * NbLabelAction.extension.myfunc = function...
		 * コンテキスト：
		 * 実行時のthisはアクションラベルで指定されたMovieClipです。
		 * ラベルを記載したMovieClip自体・タイムライン上の親MovieClip・stageのいずれかです。
		 * ラベルのフォーマット：
		 * 		labelName:(target.)#myfunc
		 * 		labelName:(target.)#myfunc(param)
		 * ラベルに直接引数を書くことができます。この場合、引数は"("から")"まで全てが単一の
		 * 文字列としてmyfuncの第一引数に渡されます。現状引数中に")"を含める方法はありません。
		 */
		,extension		: {
			
		}
		
	};
	
})();

