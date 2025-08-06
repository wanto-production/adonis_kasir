import vine from '@vinejs/vine'

function mergeSchemas(...schemas: Record<string, any>[]) {
  return schemas.reduce((acc, schema) => ({ ...acc, ...schema }), {})
}

// Schema mentah login
const loginSchema = {
  email: vine.string().email(),
  password: vine.string().minLength(8)
}

// Compile login validator
export const loginValidator = vine.compile(
  vine.object(loginSchema)
)

// Compile register validator (merge login + username)
export const registerValidator = vine.compile(
  vine.object(
    mergeSchemas(
      loginSchema, // ← pakai schema mentah, bukan hasil compile
      { username: vine.string().minLength(5) }
    )
  )
)

