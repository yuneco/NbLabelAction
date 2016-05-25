/*
*   This js file includes extension script for NbLabelAction.
*   It is loaded in head of "template.html".
*   Initial contents of this file is just an exmple that illustrate
*   how to write extension socrept.
*   You can edit, add or clear all of this file.
*
*   このファイルはNbLabelActionで使用できる機能拡張用のスクリプトです。
*   template.htmlのヘッダ部分から読み込まれています。
*   このファイルの初期内容は機能拡張の記述方法を説明するためのサンプルです。
*   全ての部分は自由に編集・追加・削除できます。
*/


if(!window['NbLabelAction']){throw "NbLabelAction.js is not loaded."}

/**
 * 引数のラベルからランダムにひとつを返します。
 * 戻り値のラベルが存在する場合、ムービークリップはそのラベルにジャンプします。
 * @param   param   format:"label1,label2..."	カンマ区切りのラベル文字列
 * @return  label
 */
NbLabelAction.extension.select  = function(param){
	if(!param){return}
	var labels		= param.split(/,/);
	return labels[Math.floor(Math.random() * labels.length)];
};

/**
 * 指定した確率で指定したラベルにジャンプします。
 * @param	param	format:"probability,label"	probabilityは0から1の小数で指定。
 * @param	label	指定の確率で指定したlabel。それ以外は空文字。
 */
NbLabelAction.extension.chance  = function(param){
	if(!param){return}
	var params		= param.split(/,/);
	var probability	= (params[0] || 0)+0;
	var label		= params[1] || '';
	return Math.random() < probability ? label : '';
};
