"use client";

import { mailchimp } from '@/app/resources'
import { Button, Flex, Heading, Input, Text, Background } from '@/once-ui/components';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeout: ReturnType<typeof setTimeout>;
    return ((...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    }) as T;
}

type NewsletterProps = {
    display: boolean;
    title: string | JSX.Element;
    description: string | JSX.Element;
}

type NotificationModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const NotificationModal = ({ isOpen, onClose }: NotificationModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'fixed',
                        top: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'var(--color-surface)',
                        padding: '1rem 2rem',
                        borderRadius: 'var(--radius-m)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                    }}
                >
                    <Flex direction="column" gap="8" alignItems="center">
                        <Heading variant="display-strong-xs">Success!</Heading>
                        <Text>Thank you for subscribing to my newsletter!</Text>
                    </Flex>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [touched, setTouched] = useState<boolean>(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [showModal, setShowModal] = useState(false);

    const t = useTranslations();

    const validateEmail = (email: string): boolean => {
        if (email === '') {
            return true;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        if (!validateEmail(value)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
        }
    };

    const debouncedHandleChange = debounce(handleChange, 2000);

    const handleBlur = () => {
        setTouched(true);
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
                setError('');
                setShowModal(true);
                setTimeout(() => setShowModal(false), 3000);
            } else {
                setStatus('error');
                setError('Subscription failed. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setError('Subscription failed. Please try again.');
        }
    };

    return (
        <>
            <Flex
                style={{overflow: 'hidden'}}
                position="relative"
                fillWidth padding="xl" radius="l" marginBottom="m"
                direction="column" alignItems="center" align="center"
                background="surface" border="neutral-medium" borderStyle="solid-1">
                <Background
                    position="absolute"
                    mask={mailchimp.effects.mask as any}
                    gradient={mailchimp.effects.gradient as any}
                    dots={mailchimp.effects.dots as any}
                    lines={mailchimp.effects.lines as any}/>
                <Heading 
                    style={{position: 'relative'}}
                    marginBottom="s"
                    variant="display-strong-xs">
                    {newsletter.title}
                </Heading>
                <Text
                    style={{
                        position: 'relative',
                        maxWidth: 'var(--responsive-width-xs)'
                    }}
                    wrap="balance"
                    marginBottom="l"
                    onBackground="neutral-medium">
                    {newsletter.description}
                </Text>
                <form
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                    onSubmit={handleSubmit}>
                    <Flex 
                        id="mc_embed_signup_scroll"
                        fillWidth maxWidth={24} gap="8">
                        <Input
                            formNoValidate
                            labelAsPlaceholder
                            id="mce-EMAIL"
                            name="EMAIL"
                            type="email"
                            label="Email"
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (!validateEmail(e.target.value)) {
                                    setError('Please enter a valid email address.');
                                } else {
                                    setError('');
                                }
                            }}
                            onBlur={handleBlur}
                            error={error}
                        />
                        <div className="clear">
                            <Flex height="48" alignItems="center">
                                <Button
                                    id="mc-embedded-subscribe"
                                    type="submit"
                                    value="Subscribe"
                                    size="m"
                                    fillWidth>
                                    {t("newsletter.button")}
                                </Button>
                            </Flex>
                        </div>
                    </Flex>
                </form>
            </Flex>
            <NotificationModal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)} 
            />
        </>
    );
};
