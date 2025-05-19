import { IconBrandGithub } from '@tabler/icons-react';

export default function IconGitHubItem() {
    return (
        <div className="header-link">
            <a href="https://github.com/webhdx/support" target="_blank" className="clean-btn header-link-button">
                <IconBrandGithub stroke={2} />
            </a>
        </div>
    );
}