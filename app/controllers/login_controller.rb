class LoginController < ApplicationController
  def login
    if params[:login] && params[:password]
      if @user = User.where(:login => params[:login], :password => params[:password]).first
        session[:current_user_id] = @user.id
        redirect_to admin_root_path
      end
    end
  end
  
  def logout
    session[:current_user_id] = nil
    redirect_to :root
  end
end
