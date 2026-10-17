const nextConfig={images:{formats:['image/avif','image/webp']},async headers(){return [{source:'/videos/:path*',headers:[{key:'Cache-Control',value:'public, max-age=86400'}]},{source:'/(.*)',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},{key:'X-Frame-Options',value:'DENY'}]}]}};
export default nextConfig;
