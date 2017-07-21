---
name: emacs
image: emacs.png
header: Omnisharp-Emacs 
github: omnisharp-emacs
---

### Short version
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

### Long version
1. See [here](https://github.com/OmniSharp/omnisharp-emacs)
