{ pkgs ? import <nixpkgs> { } }:

let
  NPM_CONFIG_PREFIX = toString ./npm_config_prefix;
in
pkgs.mkShell {
  packages = with pkgs.nodePackages; [
    nodejs
    nodePackages.npm
    nodePackages.cspell
    nodePackages.svelte-language-server
    nodePackages.typescript-language-server
    nodePackages.vscode-langservers-extracted
  ];

  inherit NPM_CONFIG_PREFIX;

  shellHook = ''
    export PATH="${NPM_CONFIG_PREFIX}/bin:$PATH"
  '';
}
