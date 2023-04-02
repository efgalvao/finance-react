if Rails.env == 'production'
  Rails.application.config.session_store :cookie_store, key: '_zukunft', domain: 'zukunft-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_zukunft'
end
