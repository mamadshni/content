import {ContentfulClientApi, createClient, EntryCollection} from "contentful";
import {environment} from "./src/environments/environment";
import * as fs from 'fs';

const contentful: ContentfulClientApi = createClient({
  space: environment.contentful.spaceId,
  accessToken: environment.contentful.accessToken,
});


// // Sitemap
// server.get('/sitemap.xml', sitemap);

// async function sitemap(req: Request, res: Response) {
//   res.header('Content-Type', 'application/xml');
//   res.header('Content-Encoding', 'gzip');
//
//   const port = process.env['PORT'] || 4000;
//
//   try {
//     const sitemapStream = new SitemapStream({
//       // This is required because we will be adding sitemap entries using relative URLs
//       hostname: `http://localhost:${port}`
//     });
//     const pipeline = sitemapStream.pipe(createGzip());
//
//
//     // Fetch blog posts from Contentful
//     const Collection: EntryCollection<{
//       slug: string;
//     }> = await contentful.getEntries({
//       content_type: 'people',
//       limit: 1000,
//     });
//     console.log(Collection.items);
//     console.log(Collection.items.map(item => item.sys));
//
//     for (const entry of Collection.items) {
//       /**
//        * For each blog post, add a new sitemap item. The Angular app contains
//        * a route that uses the blog post's slug as a route parameter. So the
//        * 'url' value will be the slug and is a relative URL that matches our
//        * Angular route.
//        */
//       sitemapStream.write({
//         changefreq: EnumChangefreq.MONTHLY,
//         lastmod: entry.sys.updatedAt,
//         priority: .7,
//         url: `people/${entry.sys.id}`,
//       } as SitemapItem);
//     }
//
//     // Add any other sitemap items for other pages of your site
//     sitemapStream.write({
//       changefreq: EnumChangefreq.DAILY,
//       priority: 1,
//       url: '',
//     } as SitemapItem);
//
//     // Stream write the response
//     sitemapStream.end();
//     pipeline.pipe(res).on('error', (error: Error) => {
//       throw error;
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).end();
//   }
// }

async function test() {


const Collection: EntryCollection<any> = await contentful.getEntries({
  content_type: 'people',
  limit: 1000,
});

const text = Collection.items.map(entry => `/people/${entry.sys.id}`).join('\r\n')

  fs.writeFileSync("routes.txt", text)

}

test()
