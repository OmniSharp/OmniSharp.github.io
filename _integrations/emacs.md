---
name: emacs
image: emacs.png
header: Omnisharp-Emacs 
github: omnisharp-emacs
---

### Short version
1. Enable the [MELPA](http://melpa.org/#/getting-started) stable package archive. Use MELPA [stable](https://github.com/milkypostman/melpa#stable-packages) for official releases, or plain MELPA for development snapshots.
1. `M-x package-install RET omnisharp RET`
1. Clone [omnisharp-server](https://github.com/OmniSharp/omnisharp-server) to a location of your choosing
1. Build it :)
1. Download [curl](http://curl.haxx.se/download.html)
1. Customize omnisharp with `M-x customize-group RET omnisharp RET`
1. Currently there are default keybinding suggestions for `evil-mode` users [at github](https://github.com/OmniSharp/omnisharp-emacs/blob/master/example-config-for-evil-mode.el). Adopt them or create your own!
    - Start omnisharp with `M-x omnisharp-mode RET` or automatically in a mode hook

### Long version
1. See [here](https://github.com/OmniSharp/omnisharp-emacs)
