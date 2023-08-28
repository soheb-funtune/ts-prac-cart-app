

const CURRANCY_FORMAT = new Intl.NumberFormat(undefined , {
    currency: "INR",style:"currency"
})

export function CurrancyFormater(num : number) {
    return CURRANCY_FORMAT.format(num)
}