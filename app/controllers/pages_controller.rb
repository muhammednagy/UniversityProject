class PagesController < ApplicationController
  def home
    redirect_to rooms_path
  end
end
