# What this？

+ NbLabelAction is small JavaScript library for AnimateCC(FlashCC).
+ You can control your timeline by frame labels without any action or script.
+ Main target of this tool are designers and illustrators who is not familiar with scripting.

# Get started

+ click "download zip" and dlownload all files.
+ open "TemplateIphone.fla" in template folder.
+ press Cmd(Ctrl)+Enter for preview. sample contents will be shown in your browser.
+ delete sample contents and create what you want.


# How to control timeline
Add frame labels to control animation.

## example
![SAMPLE](https://github.com/yuneco/NbLabelAction/blob/master/example/sample_img1.png)
+ start with first frame (label : top) normally.
+ at the end of label section(15 frame), back to head of label 'top'. (= loop 1-15 frame)
+ if this moveiclip is clicked, goto '@click'.
+ at the end of label section(26 frame), back to head of label 'top'.

## labe format
Labels that control timeline is called 'action label'.
``` 
labelName:action 
```
example:
```
PiyoPiyo:<
MiyaoMiyao:s.>
@click:s.PiyoPiyo
```

### labelName
labelName is name of this label. You can only use alphabets and digits (first charactor must be alphabet).

### labelName : @click
'@click' is special label name. If the timeline has this label, animation is jump to there when you click(or tap) the element.

### action
action part specify what to do when the animation reach to the end of label section. Following keywords are allowed:

|action|mean|example|
|:--:|:--:|:--:|
|\||stop|PlayOnce: \||
|>|goto(and play) next label|Next:>|
|<|back to the head of this label (= loop)|LoopMe:<|
|<<|goto(and play) prev label|Back:<|
|labelName|goto(and play) specified label|@click:Next|

You can specify the target of action optionally.

|target|mean|example|explanation|
|:--:|:--|:--|:--|
|p.|parent|@click:p.>|play by click and have parent moveiclip jump to next label (like pagination button) |
|s.|stage|@click:s.FirstPage|play by click and have stage timeline jump to the 'FirstPage' label (like home button) |

### extend action
If you can use javascript, you can extend default action. 
To add extend action, add function under `NbLabelAction.extend` .

+ On the timeline, user can write param using '( )' like 'func(a,b,c)'. In the js function, all params are passed as a single string like 'a,b,c'.
+ Context('this') is target movieclip.
+ If the function return value, the framework deals it as a labelName and try to gotoAndPlay there.

Example of extend action:

example: jump to specified label randomly.
```javascript
NbLabelAction.extension.select  = function(param){
	if(!param){return}
	var labels		= param.split(/,/);
	return labels[Math.floor(Math.random() * labels.length)];
};
```
On the timeline you can write...

example: jump to specified label randomly.
```
@click:#select(labe1A,labelB,labelC)
```





# Licence
MIT


# Contact
+ twitter : @yuneco
+ mail : info@nekobooks.com
