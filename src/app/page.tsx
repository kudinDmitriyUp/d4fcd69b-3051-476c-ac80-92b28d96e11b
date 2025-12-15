"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import MetricCardSix from '@/components/sections/metrics/MetricCardSix';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles, Users, MessageSquare, Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="fluid"
      cardStyle="outline-light"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="BUILDERCULT"
          navItems={[
            { name: "How It Works", id: "features" },
            { name: "Faceless Systems", id: "faceless" },
            { name: "Community", id: "about" },
            { name: "Resources", id: "blog" },
            { name: "Join Now", id: "contact" }
          ]}
          bottomLeftText="AI-First Education Platform"
          bottomRightText="hello@buildercult.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="Learn How to Build & Grow Apps Using AI + Short-Form Content"
          description="Buildercult is the AI-first education platform that teaches you how to build consumer apps using AI tools and scale them using short-form content — especially faceless content systems. No traditional coding required."
          tag="For Creators & Indie Hackers"
          buttons={[
            { text: "Start Building", href: "#contact" },
            { text: "Explore Curriculum" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806694613-ugii7hmk.jpg"
          imageAlt="Developer building app with AI tools"
          frameStyle="browser"
          metricsLabel="Trusted by solo founders, creators, and indie hackers building real products"
          metrics={[
            { id: "1", value: "1000+", label: "Founders Building Apps" },
            { id: "2", value: "$5M+", label: "Apps Launched & Live" },
            { id: "3", value: "50M+", label: "Content Impressions" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="What You'll Learn in Buildercult"
          description="Master the complete process from idea validation to scaling apps with content. Our curriculum is execution-focused and practical."
          tag="Core Curriculum"
          features={[
            {
              id: 1,
              title: "App Ideation",
              description: "Find app ideas that people actually want. Learn to validate ideas using Reddit, Twitter, Play Store reviews. Identify pain-driven niches that work with content-first distribution.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806695658-1se3qpms.jpg",
              imageAlt: "App idea validation process"
            },
            {
              id: 2,
              title: "Building Apps With AI",
              description: "Build consumer apps using AI tools without traditional coding. Use AI to generate UI, build MVPs, create backend logic. Turn ideas into real products fast.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806696668-tqpre7j6.jpg",
              imageAlt: "AI tools and software interface"
            },
            {
              id: 3,
              title: "MVP → Production",
              description: "Refine your MVP into a production-ready app. Fix UX and flows. Prepare apps for real users. Learn monetization basics: subscriptions, one-time payments, freemium models.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806697596-ijn5cbaj.jpg",
              imageAlt: "MVP launch and product release"
            },
            {
              id: 4,
              title: "Short-Form Content Growth",
              description: "Scale apps using Instagram Reels, TikTok, YouTube Shorts. Learn content-first app growth strategy. Understand why short-form content beats ads for early-stage apps.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806698337-k0ghlwaa.jpg",
              imageAlt: "Mobile phone with short-form content"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faceless" data-section="faceless">
        <SplitAboutMetric
          title="Faceless Content Growth Systems"
          description={[
            "Buildercult teaches you how to promote apps without showing your face. Use AI voiceovers, screen recordings, story-based hooks, POV content, text-on-screen formats, meme-style hooks, and relatable pain-based content.",
            "Learn proven faceless formats: problem-solution reels, storytelling loops, before/after transformations, AI-generated voiceovers with captions, comment-bait hooks, app demo loops, educational clips, and \"I built an app that...\" narratives.",
            "Master the complete system: how to write hooks that stop scrolls, structure 30-day content plans, plug your app subtly, and convert viewers into real users. This is distribution mastery."
          ]}
          metrics={[
            { label: "Faceless Content Types", value: "8+" },
            { label: "Avg View Rate", value: "3-5x" }
          ]}
          showBorder={false}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="comparison" data-section="comparison">
        <PricingCardNine
          title="How Buildercult is Different"
          description="We're not a generic course. We're an execution-first platform built by builders, for builders."
          tag="What Sets Us Apart"
          plans={[
            {
              id: "not",
              title: "What We're NOT",
              price: "❌",
              period: "",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806694613-ugii7hmk.jpg",
              button: { text: "Learn More" },
              features: [
                "Generic coding courses",
                "Boring SaaS tutorials",
                "Theory-only programs",
                "Desktop-only content",
                "Outdated frameworks"
              ]
            },
            {
              id: "is",
              title: "What We ARE",
              price: "✓",
              period: "",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806697596-ijn5cbaj.jpg",
              button: { text: "Start Now" },
              features: [
                "Practical execution-focused training",
                "Built for internet creators",
                "Focused on distribution & monetization",
                "Designed for speed & iteration",
                "Real-world app examples"
              ]
            }
          ]}
          animationType="slide-up"
          variant="border"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <MetricCardSix
          title="Why Join Buildercult"
          description="You don't just learn once. You keep building. Community + education platform with ongoing support."
          tag="Community Value"
          metrics={[
            {
              id: "1",
              value: "Weekly",
              tag: "Updates",
              tagIcon: Sparkles,
              title: "New app ideas and content frameworks"
            },
            {
              id: "2",
              value: "Live",
              tag: "Cohorts",
              tagIcon: Users,
              title: "Founder breakdowns and execution sprints"
            },
            {
              id: "3",
              value: "Ongoing",
              tag: "Support",
              tagIcon: MessageSquare,
              title: "Real examples and case studies"
            },
            {
              id: "4",
              value: "Founder",
              tag: "Led",
              tagIcon: Award,
              title: "Direct insights and strategy shares"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Trusted by Builders"
          description="See what founders and creators are building with Buildercult"
          tag="Social Proof"
          testimonials={[
            {
              id: "1",
              title: "Built a $5k/mo app in 8 weeks",
              quote: "Buildercult taught me everything I needed to launch my app using AI. The content growth strategies actually work. I went from zero to 500 paying users using faceless content.",
              name: "Alex Chen",
              role: "Solo Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806704658-wyth96nz.jpg",
              imageAlt: "Alex Chen founder portrait"
            },
            {
              id: "2",
              title: "Content strategy changed my growth",
              quote: "The faceless content systems are game-changing. I was burning money on ads until I implemented Buildercult's 30-day content plan. Now my app grows organically.",
              name: "Maria Rodriguez",
              role: "Indie Hacker",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806705435-2bilk08z.jpg",
              imageAlt: "Maria Rodriguez founder portrait"
            },
            {
              id: "3",
              title: "From idea to $1k MRR in 12 weeks",
              quote: "The combination of AI building + short-form content growth is unstoppable. Buildercult gives you the exact playbook. No fluff, all execution.",
              name: "James Park",
              role: "Creator & Builder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806706066-pe0fvuop.jpg",
              imageAlt: "James Park founder portrait"
            },
            {
              id: "4",
              title: "Finally understand app monetization",
              quote: "Most courses teach you how to code. Buildercult teaches you how to build something people want and actually pay for. Game changer.",
              name: "Sarah Johnson",
              role: "Marketer Turned Builder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806706828-5uu99uhb.jpg",
              imageAlt: "Sarah Johnson founder portrait"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Insights & Guides"
          description="Learn from real builders executing in the wild. Insights, case studies, and actionable frameworks."
          tag="Resources"
          blogs={[
            {
              id: "1",
              category: "Building",
              title: "AI Tools Every App Builder Should Know",
              excerpt: "A breakdown of the best AI tools for app building in 2025. Skip the expensive developers. Use these tools.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806707730-2vj0fnp8.jpg",
              imageAlt: "AI tools for app building",
              authorName: "Buildercult Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806709844-aad0py2b.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Content",
              title: "The 30-Day Faceless Content Plan",
              excerpt: "A day-by-day breakdown of how to structure short-form content to grow your app to 1000 users.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806708389-62qo8ro9.jpg",
              imageAlt: "Content strategy guide",
              authorName: "Buildercult Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806710419-wakd7hg6.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Growth",
              title: "From Idea to Paying Users: A Real Breakdown",
              excerpt: "Watch how one Buildercult founder took an idea to $2k MRR in under 12 weeks. Full breakdown.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806709206-jrhgszu4.jpg",
              imageAlt: "Founder success story",
              authorName: "Buildercult Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765806711187-4dw57ocj.jpg",
              date: "8 Jan 2025"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to start building?"
          animationType="background-highlight"
          inputPlaceholder="Enter your email"
          buttonText="Start Building"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="BUILDERCULT"
          ariaLabel="Buildercult footer"
        />
      </div>
    </ThemeProvider>
  );
}