---
title: OmniSharp - .NET and Intellsense on any platform with your editor of choice
layout: default
---

## Welcome to OmniSharp...for your editor!
![Look at all those editor icons!](images/icons.png?raw=true)

OmniSharp is a family of Open Source projects, each with one goal - To enable great .NET development in YOUR editor of choice.

It's fun to say Cross Platform .NET. But is it reasonable for someone to develop .NET without Visual Studio and Windows?

Is it fun to do .NET on a Mac in Sublime? Ubuntu and Emacs? Windows and Atom? Can you use your editor PLUS get use great features like Intellisense (not just Autocomplete), Add Reference, Format Document, and lots more. Develop anywhere, deploy anywhere (and to [Azure](http://www.azure.com)!)

![It's amazing! Really. Intellisense in YOUR editor.](images/sublimevisualstudio.jpg?raw=true)

## Yes. Here's how to get started
Get [ASP.NET vNext for your platform](https://github.com/aspnet/home#getting-started).

### [Sublime Text 3](http://www.sublimetext.com/)
- Install the <a href="https://sublime.wbond.net/packages/Kulture">Kulture</a> plugin from <a href="https://sublime.wbond.net/">Package Control</a>.
- Install the <a href="https://sublime.wbond.net/packages/OmniSharp">OmniSharp</a> plugin from <a href="https://sublime.wbond.net/">Package Control</a>.
- Make sure your project also has a <a href="https://github.com/OmniSharp/omnisharp-sublime#project-setting">sublime-project file</a>.
- Optionally change your <a href="https://github.com/OmniSharp/omnisharp-sublime#c-language-specific-settings">C# language settings to launch Intellisense on . and &lt;</a>.
- Optionally install a <a href="https://sublime.wbond.net/packages/C%23%20Snippets">C# Snippets package</a>.

### [Atom](https://atom.io/)
- Install the [Language Csharp](https://atom.io/packages/language-csharp) package.
- Install the [Autocomplete Plus Async](https://atom.io/packages/autocomplete-plus-async) package.
- Install the [Omnisharp Atom](https://atom.io/packages/omnisharp-atom) package.

### [Emacs](http://www.gnu.org/software/emacs/)
- Short version
    - Enable the [MELPA](http://melpa.org/#/getting-started) package archive
    - `M-x package-install RET omnisharp RET`
    - Clone [OmniSharp](https://github.com/OmniSharp/Omnisharp) to a location of your choosing
    - Build it :)
    - Download [curl](http://curl.haxx.se/download.html)
    - Customize omnisharp with `M-x customize-group RET omnisharp RET`
    - Currently there are default keybinding suggestions for `evil-mode` users [at github](https://github.com/OmniSharp/omnisharp-emacs/blob/master/example-config-for-evil-mode.el). Adopt them or create your own!
    - Start omnisharp with `M-x omnisharp-mode RET` or automatically in a mode hook
- Long version
    - See [here](https://github.com/OmniSharp/omnisharp-emacs)

### [Brackets](http://brackets.io/)
- Install the Omnisharp extension from the [extension manager](https://brackets-registry.aboutweb.com/) within Brackets.io

### [Vim](http://www.vim.org/)
- Short version
    - Install [OmniSharp](https://github.com/OmniSharp/Omnisharp), [vim-dispatch](https://github.com/tpope/vim-dispatch), [CtrlP](https://github.com/kien/ctrlp.vim) & [Syntastic](https://github.com/scrooloose/syntastic) using your favourite method.
    - Build the OmniSharp server
    - Install [Python 2.7.5](http://www.python.org/download/releases/2.7.5/)
    - Create some [keybindings](https://github.com/OmniSharp/Omnisharp#configuration)
- Long version
    - See [here](https://github.com/OmniSharp/Omnisharp)
    
### Command line only
- Create projects using <a href="https://www.npmjs.org/package/generator-aspnet">yeoman aspnet generators</a>
- Build projects using <code>kpm build</code>
- Run project from the command line with <code>k web</code> or <code>k run</code>
- Package projects for publishing with <code>kpm pack</code>

## Authors and Contributors

Jason Imison ([@nosami](http://github.com/nosami)), Jonathan Channon ([@jchannon](http://github.com/jchannon)), Martijn Laarman ([@Mpdreamz](http://github.com/Mpdreamz)), Mat McLoughlin ([@mat-mcloughlin](https://github.com/mat-mcloughlin)), Stephen James ([@stephen-james](http://github.com/stephen-james)), Sayed Ibrahim Hashimi ([@sayedihashimi](http://github.com/sayedihashimi)) Scott Hanselman ([@shanselman](http://github.com/shanselman)), and Mika Vilpas [@sp3ctum](https://github.com/sp3ctum).
