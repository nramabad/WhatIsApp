use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :what_is_app, WhatIsAppWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :what_is_app, WhatIsApp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "what_is_app_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
