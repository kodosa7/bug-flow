# Dev BugFlow
## React project that helps reporting error workflows

## About
BugFlow is a React web app that allows users creating a visual workflow  
of bugs and errors they need to share with someone else, e.g. to request help.  

## How does it look like
![image](https://github.com/kodosa7/bug-flow/assets/57393100/84e5b40e-2a9d-4877-b192-e8badf4124ea)

## How does it work
The app is waiting for copy/pasted image or screenshot,  
allows adding text commentary, everything in steps. It's up to the user  
how many steps they add. When the user decides their bug flow has finished,  
added screenshots and text captions are processed foe export as an image automatically  
copied to the clipboard as one big workflow, being ready to share.

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzIzOGFkZmE2MmRlZjU0MmIwZTZhZGRkMDdlNjMyMWFlODQxYWM5ZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/FsE3RvffRAiDKowCvu/giphy.gif)

## Buttons
- Any flow item can be removed with the ``Remove step`` button.
- To add another step in the flow, use ``Add Next Step`` button.
- To export your flow as a clipbpard copied image, use ``Copy to clipboard`` button.
- To export your flow as a PNG image to your local disk storage, use ``Save as PNG``  
  button. Image file name is ``bugflow.png``.
- Removing the first step causes page reload

In the clipboard/saved image, a timestamp is added

![image](https://github.com/kodosa7/bug-flow/assets/57393100/1741f73d-3ccf-4ef0-81aa-a13f031f793f)

## Resources
- ReactJS and Tailwind, npm
- made with lots of ChatGPT help
- WIP

## Notes
Due to html2canvas library limitations, PNG for the Dev BugFlow logo was used  
instead of SVG. Sorry :-(
