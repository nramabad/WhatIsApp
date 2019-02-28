defmodule WhatIsAppWeb.Api.SessionsView do
  use WhatIsAppWeb, :view

  def render("show.json", auth_token) do
    %{data: %{token: auth_token.token}}
  end
end
