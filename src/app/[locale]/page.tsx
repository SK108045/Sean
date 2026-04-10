import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, Arrow, Badge } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources'; 
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {
	const t = await getTranslations();
    const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter } = renderContent(t);
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			{/* Enhanced Hero Section */}
			<Flex
				fillWidth
				direction="column"
				paddingY="xl" gap="l">
					<Flex
						direction="column"
						fillWidth maxWidth="s"
						gap="l">
						<RevealFx
							translateY="4" fillWidth justifyContent="flex-start" paddingBottom="0">
							<Heading
								wrap="balance"
								variant="display-strong-l">
								{home.headline}
							</Heading>
						</RevealFx>
						<RevealFx
							translateY="8" delay={0.2} fillWidth justifyContent="flex-start" paddingBottom="0">
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="heading-default-xl">
								{home.subline}
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={0.3}>
							<Flex gap="m" alignItems="center">
								<Button
									id="about"
									data-border="rounded"
									href={`/${locale}/about`}
									variant="primary"
									size="m">
									<Flex
										gap="8"
										alignItems="center">
										{about.avatar.display && (
											<Avatar
												style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
												src={person.avatar}
												size="m"/>
											)}
											{t("about.title")}
											<Arrow trigger="#about"/>
									</Flex>
								</Button>
								<Button
									href={`/${locale}/work`}
									variant="secondary"
									size="m">
									<Flex gap="8" alignItems="center">
										View Work
										<Arrow trigger="#work"/>
									</Flex>
								</Button>
							</Flex>
						</RevealFx>
					</Flex>
				</Flex>

				{/* Role Badge Section */}
				<RevealFx translateY="16" delay={0.4}>
					<Flex 
						fillWidth 
						direction="column" 
						paddingY="xl" 
						alignItems="flex-start"
						gap="m"
						borderBottom="neutral-medium">
						<Badge
							variant="strong"
							size="l">
							Software Developer
						</Badge>
						<Text
							variant="body-strong-l"
							wrap="balance"
							onBackground="neutral-weak">
							Crafting digital experiences with clean code and thoughtful design
						</Text>
					</Flex>
				</RevealFx>

				{/* Featured Project */}
				<RevealFx translateY="16" delay={0.5}>
					<Flex
						fillWidth
						direction="column"
						gap="m"
						paddingY="l">
						<Flex alignItems="baseline" gap="m">
							<Heading
								as="h2"
								variant="display-strong-s"
								wrap="balance">
								Featured Project
							</Heading>
						</Flex>
						<Projects range={[1,1]} locale={locale}/>
					</Flex>
				</RevealFx>

				{/* Featured Projects Grid */}
				<RevealFx translateY="16" delay={0.6}>
					<Flex
						fillWidth
						direction="column"
						gap="m"
						paddingY="l">
						<Heading
							as="h2"
							variant="display-strong-s"
							wrap="balance">
							More Projects
						</Heading>
						<Projects range={[2,4]} locale={locale}/>
					</Flex>
				</RevealFx>

				{/* View All Projects CTA */}
				<RevealFx translateY="16" delay={0.7}>
					<Flex fillWidth justifyContent="flex-start" paddingY="l">
						<Button
							href={`/${locale}/work`}
							variant="tertiary"
							size="l">
							<Flex gap="8" alignItems="center">
								<Text
									variant="heading-strong-l"
									wrap="balance">
									View All Projects
								</Text>
								<Arrow trigger="#all-projects"/>
							</Flex>
						</Button>
					</Flex>
				</RevealFx>

				{/* Blog Section */}
				{routes['/blog'] && (
					<RevealFx translateY="16" delay={0.8}>
						<Flex
							fillWidth gap="l"
							mobileDirection="column"
							paddingY="l"
							borderTop="neutral-medium">
							<Flex flex={1}>
								<Heading
									as="h2"
									variant="display-strong-s"
									wrap="balance">
									Latest Insights
								</Heading>
							</Flex>
							<Flex
								flex={1.5} paddingX="0">
								<Posts range={[1,2]} columns="1" locale={locale}/>
							</Flex>
						</Flex>
					</RevealFx>
				)}
				
				{newsletter.display && (
					<RevealFx translateY="16" delay={0.9}>
						<Mailchimp newsletter={newsletter} />
					</RevealFx>
				)}
		</Flex>
	);
}
