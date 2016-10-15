class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected
    def after_sign_in_path_for(resource)
      home_path
    end

    def after_sign_out_path_for(resource_or_scope)
      root_path
    end
    
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end

    def authenticate_user!
      redirect_to root_path, notice: "You must login" unless user_signed_in?
    end


end
