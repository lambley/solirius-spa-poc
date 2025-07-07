import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // layout not included in this config
      {
        name: "sitewide",
        label: "Sitewide Pages",
        path: "content/sitewide",
        format: "json",
        match: {
          include: "*",
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "actionText",
            label: "Action Text",
            required: false,
          },
          {
            type: "string",
            name: "actionHref",
            label: "Action Href",
            required: false,
          },
          {
            type: "string",
            name: "actionClass",
            label: "Action Class",
            required: false,
          },
        ],
      },
      {
        name: "sections",
        label: "Homepage Sections",
        path: "content/sections",
        format: "json",
        match: {
          include: "*",
        },
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description" },
          { type: "string", name: "imageUrl", label: "Image URL" },
          { type: "string", name: "imageAlt", label: "Image Alt" },
          {
            type: "object",
            name: "content",
            label: "Content",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "imageUrl", label: "Image URL" },
              { type: "string", name: "imageAlt", label: "Image Alt" },
            ],
          },
          {
            type: "object",
            name: "linkToPage",
            label: "Link to Page",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Href" },
              { type: "string", name: "hrefText", label: "Href Text" },
              { type: "string", name: "target", label: "Target" },
              { type: "string", name: "rel", label: "Rel" },
            ],
          },
        ],
      },
      {
        name: "sitePages", // no spaces recommended in the `name` field
        label: "Site Pages",
        path: "content/pages",
        format: "json",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "object",
            name: "paragraphOne",
            label: "Paragraph One",
            fields: [
              { type: "string", name: "title", label: "Title", required: true },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
              },
              { type: "string", name: "imageUrl", label: "Image URL" },
              { type: "string", name: "imageAlt", label: "Image Alt" },
              { type: "string", name: "blockClasses", label: "Block Classes" },
            ],
          },
          {
            type: "object",
            name: "paragraphTwo",
            label: "Paragraph Two",
            fields: [
              { type: "string", name: "title", label: "Title", required: true },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
              },
              { type: "string", name: "imageUrl", label: "Image URL" },
              { type: "string", name: "imageAlt", label: "Image Alt" },
              { type: "string", name: "blockClasses", label: "Block Classes" },
            ],
          },
        ],
      },
    ],
  },
});
