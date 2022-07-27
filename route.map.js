"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var contentful_1 = require("contentful");
var environment_1 = require("./src/environments/environment");
var fs = require("fs");
var contentful = (0, contentful_1.createClient)({
    space: environment_1.environment.contentful.spaceId,
    accessToken: environment_1.environment.contentful.accessToken
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
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var Collection, text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contentful.getEntries({
                        content_type: 'people',
                        limit: 1000
                    })];
                case 1:
                    Collection = _a.sent();
                    text = Collection.items.map(function (entry) { return "/people/".concat(entry.sys.id); }).join('\r\n');
                    fs.writeFileSync("routes.txt", text);
                    return [2 /*return*/];
            }
        });
    });
}
test();
