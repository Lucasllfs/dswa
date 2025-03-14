import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(gfm).use(html).process(markdown);

  console.log(result.toString());
  return result.toString();
}