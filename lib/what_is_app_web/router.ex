defmodule WhatIsAppWeb.Router do
  use WhatIsAppWeb, :router
  alias WhatIsAppWeb.Api

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]

  end

  pipeline :authenticate do
    plug WhatIsAppWeb.Plugs.Authenticate
  end

  # scope "/restricted", Restricted do
  #   pipe_through :authenticate
  #   resources "/private"
  # end

  scope "/", WhatIsAppWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", Api do
    pipe_through :api

    scope "/sessions" do
      # pipe_through :api

      post "/sign_in", SessionsController, :create
      delete "/sign_out", SessionsController, :delete
    end
  end
end
