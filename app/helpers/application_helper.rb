module ApplicationHelper
  def form_geolocation_fields(form, adresse = true)
    concat (javascript_include_tag 'geolocation.js')
    content_tag :div, nil, :class => 'geolocation' do
      concat (raw "<input class='localize_me' type='button' value='me localiser' />")
      concat (content_tag :div, 'data-role' => 'fieldcontain' do
        concat form.label :latitude
        concat form.text_field :latitude, :class => 'latitude'
      end)
      concat (content_tag :div, 'data-role' => 'fieldcontain' do
        concat form.label :longitude
        concat form.text_field :longitude, :class => 'longitude'
      end)
      concat (content_tag :p, nil, :class => 'adresse')
    end
  end
end
