module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Chewy Documentation',
      items: [
        'getting-started',
        'what-is-chewy.json-file'
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        {
          type: 'category',
          label: 'Admin',
          items: [
              'appsmith'
          ]
        },
        {
          type: 'category',
          label: 'Auth',
          items: [
            'keycloak'
          ]
        },
        {
          type: 'category',
          label: 'Content',
          items: [
            'pg-diff-migrations'
          ]
        },
        {
          type: 'category',
          label: 'GraphQL',
          items: [
            'hasura'
          ]
        },
        {
          type: 'category',
          label: 'Search',
          items: [
            'meilisearch'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Philosophy',
      items: [
          'filename-rules',
          'eslint-rules'
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing',
      ],
    },
  ]
};
