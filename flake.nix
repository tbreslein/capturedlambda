{
  description = "My blog / website";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        NPM_CONFIG_PREFIX = toString ./npm_config_prefix;
      in
      {
        devShell = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            bashInteractive
            nodejs
            nodePackages.npm
            nodePackages.cspell
            nodePackages.svelte-language-server
            nodePackages.typescript-language-server
            nodePackages.vscode-langservers-extracted
          ];
          buildInputs = [ ];
          inherit NPM_CONFIG_PREFIX;
          shellHook = ''
            export PATH="${NPM_CONFIG_PREFIX}/bin:$PATH"
          '';
        };
      });
}