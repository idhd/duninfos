class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :get_current_user
  def get_current_user
    if session[:current_user_id]
      @current_user = User.find(session[:current_user_id])
    else
      @current_user = nil
    end
  end
  
  def auth
    unless @current_user
      redirect_to login_path
    end
  end
  
  private

end
