# Publish the GitHub profile README

The profile README belongs in `Bhumika-Chopra/Bhumika-Chopra`, separate from the website repository. These commands clone that existing public repository into a fresh temporary directory and update its README on the default branch.

On macOS, install GitHub CLI if needed:

```sh
brew install gh
```

Then run:

```sh
gh auth login --hostname github.com --git-protocol https --web
gh auth setup-git
PROFILE_CHECKOUT="$(mktemp -d /tmp/bhumika-profile.XXXXXX)"
gh repo clone Bhumika-Chopra/Bhumika-Chopra "$PROFILE_CHECKOUT"
cp /Users/bhumika-chopra/Desktop/Projects/Bhumika-Chopra.github.io/profile/README.md "$PROFILE_CHECKOUT/README.md"
mkdir -p "$PROFILE_CHECKOUT/assets"
cp /Users/bhumika-chopra/Desktop/Projects/Bhumika-Chopra.github.io/profile/assets/cat-lab.svg "$PROFILE_CHECKOUT/assets/cat-lab.svg"
git -C "$PROFILE_CHECKOUT" diff -- README.md
git -C "$PROFILE_CHECKOUT" add README.md assets/cat-lab.svg
git -C "$PROFILE_CHECKOUT" commit -m "Refresh profile for Georgia Tech MSCS and systems for ML"
git -C "$PROFILE_CHECKOUT" push origin HEAD
gh repo view Bhumika-Chopra/Bhumika-Chopra --web
```

If the default branch requires pull requests, replace the final push with:

```sh
git -C "$PROFILE_CHECKOUT" switch -c refresh-profile
git -C "$PROFILE_CHECKOUT" push -u origin refresh-profile
cd "$PROFILE_CHECKOUT"
gh pr create --title "Refresh profile README" --body "Add a cat-themed profile with Georgia Tech, Avartha, Setu, and SysML."
```
