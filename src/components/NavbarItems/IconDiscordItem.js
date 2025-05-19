import { IconBrandDiscord } from '@tabler/icons-react';

export default function IconDiscordItem() {
    return (
        <div className="header-link">
            <a href="https://click.webhdx.dev/discord" target="_blank" className="clean-btn header-link-button">
                <IconBrandDiscord stroke={2} />
            </a>
        </div>
    );
}