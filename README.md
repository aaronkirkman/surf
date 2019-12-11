My build of surf 2.0 with custom patches (and keybindings, in `config.h`). See [https://surf.suckless.org/](https://surf.suckless.org/) for details.

To build surf on Debian 10 ("buster"), make sure you clone the `surf-webkit2` branch and install the correct dependencies:

    sudo apt-get install libwebkit2gtk-4.0-dev libgcr-3-dev
    git clone --single-branch --branch surf-webkit2 https://git.suckless.org/surf
    cd surf
    make
    
    
Patches included:

   - web-search
      - Adds a search feature that uses MODKEY+s to search [Startpage](https://www.startpage.com/).
      - Keybindings included in `config.h`
      - Refer to [https://surf.suckless.org/patches/web-search/](https://surf.suckless.org/patches/web-search/)

    

    

