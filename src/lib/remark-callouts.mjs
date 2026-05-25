import { visit } from 'unist-util-visit';

// Maps `:::name` container directives (from remark-directive) to the styled
// <aside class="callout name"> markup used across the site. This lets
// contributors add callouts in *plain Markdown*, e.g.:
//
//   :::hygiene
//   Shared water tumblers spread germs. Use individual glasses instead.
//   :::
//
//   :::tip[Start here]
//   Begin with parippu and ghee over rice.
//   :::
//
// The label can be overridden with the `[Custom label]` syntax.

const LABELS = {
  tradition: { label: 'Tradition', emoji: '🪔' },
  tip: { label: 'Tip', emoji: '✅' },
  hygiene: { label: 'Hygiene note', emoji: '🧼' },
  variation: { label: 'Regional variation', emoji: '🧭' },
};

export function remarkCallouts() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return;
      const meta = LABELS[node.name];
      if (!meta) return;

      const data = node.data || (node.data = {});
      data.hName = 'aside';
      data.hProperties = { className: ['callout', node.name] };

      // Optional custom label: :::hygiene[Wash up first]
      let labelText = `${meta.emoji} ${meta.label}`;
      const first = node.children[0];
      if (first && first.data && first.data.directiveLabel) {
        const txt = first.children?.[0]?.value;
        if (txt) labelText = `${meta.emoji} ${txt}`;
        node.children.shift();
      }

      node.children.unshift({
        type: 'paragraph',
        data: { hName: 'p', hProperties: { className: ['label'] } },
        children: [{ type: 'text', value: labelText }],
      });
    });
  };
}
