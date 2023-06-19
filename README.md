# Dev BugFlow
## React project that helps reporting error workflows
[![Netlify Status](https://api.netlify.com/api/v1/badges/86126b0e-1640-4c04-8f99-21411656cab2/deploy-status)](https://app.netlify.com/sites/devbugflow/deploys)

## About
BugFlow is a web app that allows users creating a visual workflow  
of bugs and errors they need to share with someone else, e.g. to request help.  

## How does it look like
![image](https://github.com/kodosa7/bug-flow/assets/57393100/b71dd8da-78b0-41cc-a588-2d66e2663371)

## How does it work
The app is waiting for copy/pasted image or screenshot,  
allows adding text commentary, everything in steps. It's up to the user  
how many steps they add. When the user decides their bug flow has finished,  
added screenshots and text captions are processed for export as an image either as a PNG file or
a picture automatically copied in the clipboard as one big workflow, being ready to share  
as a screenshot on popular social platforms like Slack or Discord.

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWdlZGUwYjB2czNoeXY2cGxwcjRtaTRtaW1hNHB5cmkzaW5pNnEydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AqQcmni5d5bLPXdgnv/giphy.gif)

## Buttons
- Any flow item can be removed with the ``Remove step`` button.
- To add another step in the flow, use ``Add Next Step`` button.
- To export your flow as a clipbpard copied image, use ``Copy to clipboard`` button.
- To export your flow as a PNG image to your local disk storage, use ``Save as PNG``  
  button. Image file name is ``bugflow.png``.
- Removing the first step causes page reload.
- Optional text caption can be submitted either by pressing Enter key or by pushing  
  the send (^) button.
- Added text can be removed by pushing the delete (x) button.

In the clipboard/saved image, a timestamp is added in the footer area.

![image](https://github.com/kodosa7/bug-flow/assets/57393100/45462b0b-9ad1-4f8d-9fff-a48cfbbab492)

## Resources
- ReactJS and TailwindCSS, npm
- made with help of ChatGPT

## Notes
- Due to html2canvas library limitations, PNG for the Dev BugFlow logo was used  
instead of SVG. This doesn't affect any user experience.
