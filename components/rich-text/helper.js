import cn from "classnames";
import s from "./rich-text.module.css";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import dynamic from "next/dynamic";
import Link from "next/link";

function slugifyString(string) {
  return string
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
    .toLowerCase();
}

const DynamicVideoEmbed = dynamic(() => import("./video-embed"));

export function getRichTextRenderOptions(links, options) {
  const { renderH2Links, renderNativeImg } = options;

  const assetBlockMap = new Map(
    links?.assets?.block?.map((asset) => [asset.sys.id, asset])
  );

  const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  // if (links.entries.block) {
  //   for (const entry of links.entries.block) {
  //     entryMap.set(entry.sys.id, entry);
  //   }
  // }

  // // loop through the inline linked entries and add them to the map
  // if (links.entries.inline) {
  //   for (const entry of links.entries.inline) {
  //     entryMap.set(entry.sys.id, entry);
  //   }
  // }

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      [MARKS.CODE]: (text) => <code className="">{text}</code>,
    },

    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        if (node.data.uri.includes("youtube.com/embed")) {
          return (
            <DynamicVideoEmbed embedUrl={node.data.uri} title={children} />
          );
        } else if (node.data.uri.includes("https://www.facebook.com/plugins")) {
          return (
            <DynamicVideoEmbed embedUrl={node.data.uri} title={children} />
          );
        } else {
          return (
            <a
              className={`text-green`}
              href={node.data.uri}
              target="_blank"
              rel="nofollow noreferrer"
            >
              {children}
            </a>
          );
        }
      },
      [BLOCKS.HR]: (text) => <hr />,
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className={cn("text-h1")}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => {
        if (renderH2Links) {
          return (
            <div className="">
              <h2 id={`${slugifyString(children[0])}`} className={``}>
                {children}
              </h2>
              <a
                className={``}
                href={`#${slugifyString(children[0])}`}
                aria-label={children}
              >
                {/* <LinkIcon /> */}
              </a>
            </div>
          );
        } else {
          return <h2 className={cn("text-h2")}>{children}</h2>;
        }
      },
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className={cn("text-h3 mb-2 font-semibold")}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={cn("text-h4 mb-2 font-semibold")}>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className={cn("text-h5 mb-2 font-semibold")}>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className={cn("text-h6 mb-2 font-semibold")}>{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <p cl="mb-4">{children}</p>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className={`italic`}>{children}</blockquote>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={s.ul}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className={s.ol}>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className={s.li}>{children}</li>
      ),
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryMap.get(node.data.target.sys.id);
        const { __typename } = entry;
        switch (__typename) {
          case "BlogPost":
            return (
              <Link href={`/blog/${entry.slug}`}>
                <a className="">{entry.title}</a>
              </Link>
            );
          default:
            return null;
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryMap.get(node.data.target.sys.id);
        const { __typename } = entry;
        switch (__typename) {
          case "VideoEmbed":
            const { embedUrl, title } = entry;
            return <DynamicVideoEmbed embedUrl={embedUrl} title={title} />;
          default:
            return null;
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        
        const { title, url, height, width, description } = assetBlockMap.get(
          node.data.target.sys.id
        );
        if (renderNativeImg) {
          return (
            <div className={`my-4`}>
              <img src={url} alt={description} height={height} width={width} />
            </div>
          );
        } else {
          return (
            <div className={`my-6 w-2/5 mx-auto`}>
              <Image
                src={url}
                alt={description}
                height={height}
                width={width}
                title={title}
                layout="responsive"
              />
            </div>
          );
        }
      },
    },
  };
}

// const PostContent = ({ cl, data, assets }) => {
//   return (
//     <section className={cn(cl)}>
//       {documentToReactComponents(
//         data.json,
//         getRichTextRenderOptions(assets, {})
//       )}
//     </section>
//   );
// };

export default getRichTextRenderOptions;
