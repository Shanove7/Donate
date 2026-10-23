import dotenv from 'dotenv'
dotenv.config()

const config = {
    BTZ_BASE_URL: 'https://web.btzpay.my.id',
    SITE_URL: 'https://donate.khasan.site',
    BTZ_API_KEY: '',
    BTZ_QRISDANA_API_KEY: '',
    BTZ_QRISGOPAY_API_KEY: '',
    BTZ_SHOPEEPAY_API_KEY: '',
    BTZ_SHOPEEPAY_ACCOUNT_NUMBER: '',
    BTZ_SHOPEEPAY_ACCOUNT_NAME: '',
    ADMIN_PASSWORD: 'kicau1234',
    JSONBIN_ID: '6ad477e0ffd5d16053752e19',
    JSONBIN_KEY: '$2a$10$X3YuElcgJSSQ8uKXLm9fWuleqRz4UzzouGvjqvOCHaWOjlOxHi/wm',
    WASENDER_API_KEY: '$2a$10$X3YuElcgJSSQ8uKXLm9fWuleqRz4UzzouGvjqvOCHaWOjlOxHi/wm',
    WASENDER_API_URL: 'https://api.wasender.dev/messages/text',
    OTP_HASH_SECRET: '',
    DONATION_FEE_ENABLED: 'true',
    MEMBER_FEE_PERCENT: '0.7',
    ANONYMOUS_FEE_PERCENT: '1.2',
    EARLY_SUPPORTER_CUTOFF: ''
}

for (const [key, value] of Object.entries(config)) {
    if (process.env[key] === undefined || process.env[key] === '') process.env[key] = value
}
