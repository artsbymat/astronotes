import { config, fields, collection } from '@keystatic/core';

export default config({
  ui: {
    brand: { name: 'Artronotes' }
  },
  storage: {
    kind: 'github',
    repo: 'artsbymat/astronotes'
  },
  collections: {
    articles: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Set this post as draft to prevent it from being published',
          defaultValue: true
        }),
        url: fields.url({
          label: 'URL',
          description: 'Url Cloudinary'
        }),
        title: fields.slug({
          name: { label: 'Title', validation: { length: { min: 20, max: 120 } } }
        }),
        pubDate: fields.date({
          label: 'Event date',
          description: 'The date of the event',
          defaultValue: new Date().toJSON().slice(0, 10)
        }),
        modDate: fields.date({
          label: 'Event date',
          description: 'The date of the event',
          defaultValue: new Date().toJSON().slice(0, 10)
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { length: { min: 5, max: 150 } }
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tag',
          itemLabel: (props) => props.value
        }),
        content: fields.markdoc({
          label: 'Rich text'
        })
      }
    })
  }
});
