// @ts-check
import { config, fields, singleton } from '@keystatic/core'

export default config({
    storage: {
        kind: 'local'
    },

    singletons: {
        site: singleton({
            label: 'Site Configuration',
            path: 'src/data/site/site',
            format: 'json',
            schema: {
                title: fields.text({
                    label: 'Site Name',
                    validation: {
                        isRequired: true,
                        length: {
                            max: 64
                        }
                    }
                }),
                description: fields.text({
                    label: 'Site Description',
                    validation: {
                        isRequired: true,
                        length: {
                            max: 160
                        }
                    },
                    multiline: true
                }),
                logo: fields.image({
                    label: 'Logo',
                    directory: 'src/assets/site',
                    publicPath: '~/assets/site',
                    validation: {
                        isRequired: true
                    }
                }),
                favicon: fields.image({
                    label: 'Favicon',
                    directory: 'public',
                    publicPath: '',
                    validation: {
                        isRequired: true
                    }
                })
            }
        })
    }
})