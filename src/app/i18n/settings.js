export const fallbackLng = 'fa'
export const languages = [fallbackLng, 'en']
export const defaultNS = 'translation'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        debug: false,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}