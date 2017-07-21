---
title: OmniSharp - .NET and IntelliSense on any platform with your editor of choice
layout: default
---

## Welcome to OmniSharp...for your editor!
![Look at all those editor icons!](images/icons.png?raw=true)

OmniSharp is a family of Open Source projects, each with one goal - To enable great .NET development in YOUR editor of choice.

It's fun to say Cross Platform .NET. But is it reasonable for someone to develop .NET without Visual Studio and Windows?

Is it fun to do .NET on a Mac in Sublime? Ubuntu and Emacs? Windows and Atom? You can use your editor PLUS get to use great features like Intellisense (not just Autocomplete), Add Reference, Format Document, and lots more. Develop anywhere, deploy anywhere (and to [Azure](http://www.azure.com)!)

![It's amazing! Really. Intellisense in YOUR editor.](images/sublimevisualstudio.jpg?raw=true)

## Yes. Here's how to get started
Get [ASP.NET 5 for your platform](https://github.com/aspnet/home#getting-started).

### [Sublime Text 3](http://www.sublimetext.com/)
- Install the <a href="https://sublime.wbond.net/packages/Kulture">Kulture</a> plugin from <a href="https://sublime.wbond.net/">Package Control</a>.
- Install the <a href="https://sublime.wbond.net/packages/OmniSharp">OmniSharp</a> plugin from <a href="https://sublime.wbond.net/">Package Control</a> and read the docs [here](http://omnisharp-sublime.readthedocs.org/en/latest/).
- Optionally change your <a href="https://github.com/OmniSharp/omnisharp-sublime#c-language-specific-settings">C# language settings to launch Intellisense on . and &lt;</a>.
- Optionally install a <a href="https://sublime.wbond.net/packages/C%23%20Snippets">C# Snippets package</a>.


### [Atom](https://atom.io/)
- Install the [Autocomplete Plus](https://atom.io/packages/autocomplete-plus) package.
- Install the [Omnisharp Atom](https://atom.io/packages/omnisharp-atom) package.

And more info in the [OmniSharp Atom wiki](https://github.com/OmniSharp/omnisharp-atom/wiki)!

### [Emacs](http://www.gnu.org/software/emacs/)
- Short version
1. On regular Emacs:
   - Enable the [MELPA](http://melpa.org/#/getting-started) stable package archive. Use MELPA [stable](https://github.com/milkypostman/melpa#stable-packages) for official releases, or plain MELPA for development snapshots.
   - Install package with `M-x package-install RET omnisharp RET`
   - Configure your `csharp-mode` hook so it would enable `omnisharp-mode`.
   - Add these lines in your init.el to make `omnisharp-mode` enabled for your csharp files:
   ```
     (eval-after-load
         'company
         '(add-to-list 'company-backends 'company-omnisharp))
     (add-hook 'csharp-mode-hook 'omnisharp-mode)
   ```
1. On Spacemacs:
   - Enable the `csharp` layer in your `~/.spacemacs`
   - Restart
1. Install the server with `M-x omnisharp-install-server RET` – follow instructions on minibuffer.
1. Start the server with `M-x omnisharp-start-omnisharp-server`.
1. You can also customize omnisharp with `M-x customize-group RET omnisharp RET`
- Long version
1. See [here](https://github.com/OmniSharp/omnisharp-emacs)

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
- Download _NuGet_, _npm_ and _Bower_ resources  with `dnu restore`
- Build projects using <code>dnu build</code>
- Run project from the command line with <code>dnx . web</code> or <code>dnx . run</code>
- Package projects for publishing with <code>dnu pack</code>

### Yeoman generators

Getting started with projects is easy using [yeoman](http://yeoman.io/). Here are some generators that you
can use to get started.

#### ```generator-aspnet```

The goal of [```generator-aspnet```](https://github.com/OmniSharp/generator-aspnet) is to provide an experience consistent with creating new ASP.NET 5 (_DNX_) projects
and files in Visual Studio 2015. Below are some other related generators that you may be interested in.

If you are working on a related generator please [open an issue](https://github.com/OmniSharp/generator-aspnet/issues/new) to let us know about it so that we can add it to the list.


## Authors and Contributors

Jason Imison ([@nosami](http://github.com/nosami)), Jonathan Channon ([@jchannon](http://github.com/jchannon)), Martijn Laarman ([@Mpdreamz](http://github.com/Mpdreamz)), Mat McLoughlin ([@mat-mcloughlin](https://github.com/mat-mcloughlin)), Stephen James ([@stephen-james](http://github.com/stephen-james)), Sayed Ibrahim Hashimi ([@sayedihashimi](http://github.com/sayedihashimi)) Scott Hanselman ([@shanselman](http://github.com/shanselman)), Mika Vilpas [@sp3ctum](https://github.com/sp3ctum), and Shayne Boyer ([@spboyer](http://github.com/spboyer)).

### Contact us

<a class="btn btn-warning" href="https://omnisharp.herokuapp.com/"><strong>Come hang out with us on Slack!</strong></a>
