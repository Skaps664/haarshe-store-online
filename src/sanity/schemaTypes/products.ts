import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 90 },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "text",
      rows: 10,
      options: {
        whiteSpace: "pre-line",
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "amazon_link",
      title: "Amazon Link",
      type: "string",
    },
    {
      name: "wallmart_link",
      title: "Wallmart Link",
      type: "string",
    },
    {
      name: "shopify_link",
      title: "Shopify Link",
      type: "string",
    },
    {
      name: "tiktok_link",
      title: "TikTok Link",
      type: "string",
    },
    {
      name: "price_id",
      title: "Stripe Price ID",
      type: "string",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "number",
    },
    {
      name: "ratings",
      title: "Ratings",
      type: "number",
    },
    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
    {
      name: "topPicks",
      title: "Top Picks",
      type: "boolean",
    },
    {
      name: "onSale",
      title: "On Sale",
      type: "boolean",
    },
    {
      name: "newArrivals",
      title: "New Arrivals",
      type: "boolean",
    },
  ],
});
