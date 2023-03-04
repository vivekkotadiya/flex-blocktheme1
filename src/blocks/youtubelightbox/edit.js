/**
 * Wordpress dependencies
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function edit() {
	const blockprops = useBlockProps({ className: 'lightbox-youtube lightbox-youtube--fadeIn' });

	return (
		<div className={blockprops}>
			<div class="lightbox-youtube__container">
				<div class="lightbox-youtube__close-helper">
					<button class="lightbox-youtube__close"></button>
				</div>
				<div class="lightbox-youtube__video-helper">
					<iframe
						className="lightbox-youtube__video"
						src=""
						frameborder="0"
						allowfullscreen
						allow="autoplay;"
					></iframe>
				</div>
			</div>
		</div>
	);
}
