# frozen_string_literal: true
class RoomMessage < ApplicationRecord
  belongs_to :user
  belongs_to :room, inverse_of: :room_messages
  has_one_attached :image

  def as_json(options)
    if any_attached?
      super(options).merge(user_avatar_url: user.gravatar_url, image: image_url, username: user.username)
    else
      super(options).merge(user_avatar_url: user.gravatar_url, username: user.username)
    end
  end

  def image_url
    Rails.application.routes.url_helpers.rails_representation_url(self.image.variant(resize: '200x200').processed, only_path: true)
  end

  def any_attached?
    ActiveStorage::Attachment.where(record_type: model_name.to_s, record_id: id).any?
  end
end
