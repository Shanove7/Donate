import dotenv from 'dotenv'
dotenv.config()

const config = {
    BTZ_BASE_URL: 'https://web.btzpay.my.id',
    SITE_URL: 'https://donate.khasan.site',
    BTZ_API_KEY: '',
    BTZ_QRISDANA_API_KEY: '0fd295a3617419871fea950a04d22966e382cfbf155c873577c235165c8389d7',
    BTZ_QRISGOPAY_API_KEY: '',
    BTZ_SHOPEEPAY_API_KEY: '2c103541a5b66bb7342b876aff36d49fa87ba581e9e7a361d808fb2dbd0b10a5',
    BTZ_SHOPEEPAY_ACCOUNT_NUMBER: '',
    BTZ_SHOPEEPAY_ACCOUNT_NAME: '',
    ADMIN_PASSWORD: '',
    JSONBIN_ID: '6ad477e0ffd5d16053752e19',
    JSONBIN_KEY: '$2a$10$X3YuElcgJSSQ8uKXLm9fWuleqRz4UzzouGvjqvOCHaWOjlOxHi/wm',
    WASENDER_API_KEY: '',
    WASENDER_API_URL: 'https://api.wasender.dev/messages/text',
    OTP_HASH_SECRET: '',
    DONATION_FEE_ENABLED: 'true',
    MEMBER_FEE_PERCENT: '0.5',
    ANONYMOUS_FEE_PERCENT: '0.9',
    EARLY_SUPPORTER_CUTOFF: ''
}

for (const [key, value] of Object.entries(config)) {
    if (value !== '') process.env[key] = String(value)
    else if (process.env[key] === undefined) process.env[key] = ''
}
