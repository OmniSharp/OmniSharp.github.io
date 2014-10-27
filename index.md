---
title: OmniSharp - .NET and Intellsense on any platform with your editor of choice
layout: default
---

### Welcome to OmniSharp...for your editor!
![Look at all those editor icons!](images/icons.png?raw=true)

OmniSharp is a family of Open Source projects, each with one goal - To enable great .NET development in YOUR editor of choice.

It's fun to say Cross Platform .NET. But is it reasonable for someone to develop .NET without Visual Studio and Windows? 

Is it fun to do .NET on a Mac in Sublime? Ubuntu and Emacs? Windows and Atom? Can you use your editor PLUS get use great features like Intellisense (not just Autocomplete), Add Reference, Format Document, and lots more. Develop anywhere, deploy anywhere (and to [Azure](http://www.azure.com)!)

![It's amazing! Really. Intellisense in YOUR editor.](images/sublimevisualstudio.jpg?raw=true)

### Yes. Here's how to get started

- Get <a href="https://github.com/aspnet/home#getting-started">ASP.NET vNext for your platform</a>.

- [Sublime Text 3](http://www.sublimetext.com/)? 
   - Install the <a href="https://sublime.wbond.net/packages/Kulture">Kulture</a> plugin from <a href="https://sublime.wbond.net/">Package Control</a>.
   - Install the <a href="https://sublime.wbond.net/packages/OmniSharp">OmniSharp</a> plugin from <a href="https://sublime.wbond.net/">Package Control</a>.
   - Make sure your project also has a <a href="https://github.com/moonrabbit/OmniSharpSublime#example-of-sublime-project">sublime-project file</a>.
   - Optionally change your <a href="https://github.com/moonrabbit/OmniSharpSublime#c-language-specific-settings">C# language settings to launch Intellsense on . and &lt;</a>.
   - Optionally install a <a href="https://sublime.wbond.net/packages/C%23%20Snippets">C# Snippets package</a>.
-  [Atom](https://atom.io/)?
    - Install the <code>Autocomplete Plus Async</code> package.
    - Install the <code>Atom Sharper</code> plugin from Package Control.
    - Install the <code>Language Csharp</code> plugin from Package Control (optional for syntax highlighting).
- [Emacs](http://www.gnu.org/software/emacs/)?
    - Do that...
- [Brackets](http://brackets.io/)?
    - Do that...
- [Vim](http://www.vim.org/)?
    - Short version
      - Install [OmniSharp](https://github.com/OmniSharp/Omnisharp), [vim-dispatch](https://github.com/tpope/vim-dispatch), [CtrlP](https://github.com/kien/ctrlp.vim) & [Syntastic](https://github.com/scrooloose/syntastic) using your favourite method.
      - Build the OmniSharp server
      - Install [Python 2.7.5](http://www.python.org/download/releases/2.7.5/)
      - Create some [keybindings](https://github.com/OmniSharp/Omnisharp#configuration)
   - Long version
      - See [here](https://github.com/OmniSharp/Omnisharp)
-  Command line only?
   - Create projects using <a href="https://www.npmjs.org/package/generator-aspnet">yeoman aspnet generators</a>
   - Build projects using <code>kpm build</code>
   - Run project from the command line with <code>k web</code> or <code>k run</code>
   - Package projects for publishing with <code>kpm pack</code>

### Authors and Contributors

Jason Imison (@nosami), Jonathan Channon (@jchannon), Martijn Laarman (@Mpdreamz), Sayed Ibrahim Hashimi (@sayedihashimi), and Scott Hanselman (@shanselman).

