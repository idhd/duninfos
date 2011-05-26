class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :get_current_user
  
  def auth
    unless @_current_user
      redirect_to login_path
    end
  end
  
  private
  def get_current_user
    @_current_user ||= session[:current_user_id] && User.find(session[:current_user_id])
  end
end
