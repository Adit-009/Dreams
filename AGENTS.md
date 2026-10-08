<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Shop architecture
- Preserve TanStack Start and file-route wrappers; requested JavaScript UI lives in focused JSX modules because the hosted template requires TanStack routing.
- Keep mock catalog data and payment abstractions separate from the UI so real services can replace them later without rewriting presentation.
- Use a root shop context for cart, wishlist and demo orders; browser persistence hydrates after mount to preserve server-render consistency.
- Define shop styling centrally with semantic CSS tokens and shared Button variants so every screen stays visually consistent.
