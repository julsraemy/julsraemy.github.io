# Julien A. Raemy

Source of <https://julsraemy.ch>, Julien A. Raemy's website.

The site is built with [Jekyll](https://jekyllrb.com/) and the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, and is published by GitHub Pages on every push to `main`.

## Preview the site locally

No Ruby installation is needed, only [Podman](https://podman.io/) (or Docker: replace `podman` with `docker` in the commands below).

### First time

From the root of the repository:

```bash
podman run -d --name jekyll-preview \
  --security-opt label=disable \
  -v "$PWD":/src -v jekyll-gems:/usr/local/bundle \
  -w /src -p 4000:4000 \
  docker.io/library/ruby:3.1 \
  bash -c 'bundle install --quiet && bundle exec jekyll serve --host 0.0.0.0 --livereload'
```

Wait a minute or two, then open <http://127.0.0.1:4000>. Use `127.0.0.1` rather than `localhost`, which may not connect.

The preview shows the branch that is currently checked out and reloads when a post or page is edited.

### Afterwards

| Action | Command |
|---|---|
| Stop the preview | `podman stop jekyll-preview` |
| Start it again | `podman start jekyll-preview` |
| Restart after editing `_config.yml` or switching branch | `podman restart jekyll-preview` |
| See the build output or errors | `podman logs -f jekyll-preview` |
| Remove the container completely | `podman rm -f jekyll-preview` |

After removing the container, run the "First time" command again to recreate it.

### Good to know

- The preview uses a recent Jekyll 4, whereas GitHub Pages uses Jekyll 3.10, so tiny rendering differences are possible.
- Search results come from the live Algolia index, so they reflect the published site and not local changes.
- The preview creates `_site/`, `.jekyll-cache/` and `Gemfile.lock`, which are ignored by git.

## Theme

The theme is not stored in this repository. It is downloaded at build time, at the version set by `remote_theme` in [`_config.yml`](_config.yml). To update the theme, change that version number, preview locally, then push.

Files in `_includes/`, `_data/` and `assets/` override the theme's files of the same name. Site-specific additions to the HTML `<head>` go in [`_includes/head/custom.html`](_includes/head/custom.html).

## Search

Search uses [Algolia](https://www.algolia.com/). The [Algolia index workflow](.github/workflows/algolia-index.yml) rebuilds the index on every push to `main` and twice a month, which also keeps the free Algolia application from being deleted for inactivity.

It can also be run by hand from the Actions tab: **Algolia index** → **Run workflow**.
