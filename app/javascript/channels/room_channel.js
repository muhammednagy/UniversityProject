'use strict';
import consumer from "./consumer"

$(function () {
    $('[data-channel-subscribe="room"]').each(function (index, element) {
        var $element = $(element),
            room_id = $element.data('room-id');
        let messageTemplate;
        messageTemplate = $('[data-role="message-template"]');

        $element.animate({ scrollTop: $element.prop("scrollHeight") }, 1000);

        consumer.subscriptions.create({
            channel: "RoomChannel",
            room: room_id
        }, {
            received: function received(data) {
                var content = messageTemplate.children().clone(true, true);
                content.find('[data-role="user-avatar"]').attr('title', data.username);
                content.find('[data-role="user-avatar"]').attr('src', data.user_avatar_url);
                content.find('[data-role="message-text"]').text(data.message);
                if (data.image === "") {
                    content.find('[data-role="message-image"]').remove();
                } else {
                    content.find('[data-role="message-image"]').attr('src', data.image);
                }
                content.find('[data-role="message-image-link"]').attr('href', data.image);
                content.find('[data-role="message-date"]').text(data.updated_at);
                $element.append(content);
                $element.animate({ scrollTop: $element.prop("scrollHeight") }, 1000);
            }
        });
    });
});