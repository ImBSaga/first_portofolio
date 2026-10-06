'use client';

import Link from 'next/link';
import {
  ExternalLink,
  Lock,
  Layers,
  Server,
  Cpu,
  CheckCircle2,
  Globe,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { prodigiCaseStudy } from '@/constants/prodigi-data';

export default function FeaturedProdigi() {
  return (
    <section
      id='featured-project'
      className='custom-container py-5xl md:py-8xl gap-4xl md:gap-6xl flex flex-col'
    >
      {/* 1. Header matching My Projects pattern */}
      <div className='gap-lg flex flex-col md:flex-row md:items-end md:gap-0'>
        <div className='gap-sm flex flex-col md:flex-1'>
          <div className='flex items-center gap-2'>
            <span className='from-purple-pink-600 to-purple-pink-500 rounded-full bg-linear-to-r px-3 py-1 text-xs font-bold text-white'>
              FLAGSHIP ENTERPRISE
            </span>
            <span className='text-xs font-medium text-neutral-200'>
              {prodigiCaseStudy.company}
            </span>
          </div>

          <h2 className='text-display-sm md:text-display-2xl text-left font-extrabold text-neutral-100'>
            {prodigiCaseStudy.title}
          </h2>
          <p className='from-purple-pink-600 to-purple-pink-500 md:text-md bg-linear-to-r bg-clip-text text-sm font-bold text-transparent'>
            {prodigiCaseStudy.subtitle}
          </p>
        </div>

        <p className='font-regular md:text-md text-sm text-neutral-200 md:flex-1 md:text-right'>
          {prodigiCaseStudy.tagline}
        </p>
      </div>

      {/* 2. Spotlight Banner Card in exact design tokens */}
      <div className='p-lg gap-lg md:p-3xl md:gap-xl flex flex-col rounded-4xl bg-neutral-500 transition-all duration-300 hover:bg-neutral-400 hover:shadow-[0_12px_30px_-10px_rgba(135,70,235,0.15)]'>
        {/* Top Badges & Confidential Notice */}
        <div className='pb-md flex flex-col justify-between gap-3 border-b border-neutral-400 sm:flex-row sm:items-center'>
          <div className='flex items-center gap-2'>
            <ShieldCheck className='text-purple-pink-500 h-5 w-5 shrink-0' />
            <span className='text-xs font-semibold text-neutral-100 md:text-sm'>
              Production Case Study · PT. Asia e-Services
            </span>
          </div>
          <div className='flex items-center gap-1.5 text-xs font-medium text-neutral-200'>
            <Lock className='text-purple-pink-500 h-3.5 w-3.5' />
            <span>Private GitLab Repository (Protected NDA)</span>
          </div>
        </div>

        {/* Overview Description */}
        <p className='md:text-md text-sm leading-relaxed font-normal text-neutral-200'>
          {prodigiCaseStudy.clientConfidentialityNotice}
        </p>

        {/* 4 Metrics in Standard Pills */}
        <div className='gap-sm md:gap-md grid grid-cols-2 lg:grid-cols-4'>
          {prodigiCaseStudy.metrics.map((metric, i) => (
            <div
              key={i}
              className='p-md md:p-lg flex flex-col rounded-2xl bg-neutral-600'
            >
              <span className='text-xs font-normal text-neutral-200'>
                {metric.label}
              </span>
              <span className='md:text-md mt-1 text-sm font-bold text-neutral-100'>
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Architecture Flow in Terminal style */}
        <div className='p-lg md:p-xl gap-md flex flex-col rounded-3xl bg-neutral-600'>
          <div className='pb-sm flex items-center justify-between border-b border-neutral-500'>
            <div className='flex items-center gap-2'>
              <div className='bg-purple-pink-600 h-2.5 w-2.5 rounded-full' />
              <div className='bg-purple-pink-500 h-2.5 w-2.5 rounded-full' />
              <div className='bg-primary-100 h-2.5 w-2.5 rounded-full' />
              <span className='ml-2 font-mono text-xs text-neutral-200'>
                prodigiumkm.net / cluster architecture
              </span>
            </div>
            <span className='text-purple-pink-500 text-xs font-medium'>
              ● Active Production
            </span>
          </div>

          <div className='gap-md pt-sm grid grid-cols-1 text-center md:grid-cols-4'>
            <div className='p-md flex flex-col items-center justify-center rounded-xl bg-neutral-500'>
              <span className='text-xs font-bold text-neutral-100'>
                4 Vite Frontends
              </span>
              <span className='text-[11px] text-neutral-200'>
                React 19 · TS · Monorepo
              </span>
            </div>
            <div className='p-md flex flex-col items-center justify-center rounded-xl bg-neutral-500'>
              <span className='text-xs font-bold text-neutral-100'>
                Odoo 18 REST Core
              </span>
              <span className='text-[11px] text-neutral-200'>
                Python · km_restapi
              </span>
            </div>
            <div className='p-md flex flex-col items-center justify-center rounded-xl bg-neutral-500'>
              <span className='text-xs font-bold text-neutral-100'>
                pgvector 384-dim
              </span>
              <span className='text-[11px] text-neutral-200'>
                multilingual-e5 Embeddings
              </span>
            </div>
            <div className='p-md flex flex-col items-center justify-center rounded-xl bg-neutral-500'>
              <span className='text-xs font-bold text-neutral-100'>
                WhatsApp Engine
              </span>
              <span className='text-[11px] text-neutral-200'>
                Baileys Microservice
              </span>
            </div>
          </div>
        </div>

        {/* Live Action Buttons */}
        <div className='pt-sm flex flex-wrap items-center gap-4'>
          <Link
            href='https://prodigiumkm.net'
            target='_blank'
            rel='noopener noreferrer'
            className='from-purple-pink-600 to-purple-pink-500 flex items-center gap-2 rounded-full bg-linear-to-r px-6 py-2.5 text-sm font-bold text-white shadow-[0_4px_24px_0_rgba(135,70,235,0.32)] transition-opacity hover:opacity-90'
          >
            <Globe className='h-4 w-4 shrink-0' />
            <span>Live Marketing Site</span>
            <ArrowUpRight className='h-4 w-4 shrink-0' />
          </Link>

          <Link
            href='https://app.prodigiumkm.net'
            target='_blank'
            rel='noopener noreferrer'
            className='from-purple-pink-600 to-purple-pink-500 flex items-center gap-2 bg-linear-to-r bg-clip-text text-sm font-semibold text-transparent hover:opacity-80'
          >
            <span>Launch UMKM Portal Dashboard</span>
            <ExternalLink className='text-purple-pink-500 h-4 w-4 shrink-0' />
          </Link>
        </div>
      </div>

      {/* 3. Micro-Frontend Ecosystem Grid */}
      <div className='gap-xl md:gap-2xl flex flex-col'>
        <div className='flex items-center gap-2'>
          <Layers className='text-purple-pink-500 h-5 w-5' />
          <h3 className='text-md md:text-display-xs font-bold text-neutral-100'>
            Micro-Frontend Subdomain Apps
          </h3>
        </div>

        <div className='gap-4xl md:gap-3xl grid grid-cols-1 md:grid-cols-2'>
          {prodigiCaseStudy.apps.map((app, index) => (
            <div
              key={index}
              className='p-lg gap-lg md:p-3xl md:gap-xl flex flex-col rounded-4xl bg-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-400 hover:shadow-[0_12px_30px_-10px_rgba(135,70,235,0.15)]'
            >
              <div className='flex items-center justify-between'>
                <span className='rounded-full bg-neutral-600 px-3 py-1 text-xs font-medium text-neutral-100'>
                  {app.role}
                </span>
                <span className='font-mono text-xs text-neutral-200'>
                  {app.subdomain}
                </span>
              </div>

              <h4 className='text-md font-bold text-neutral-100 md:text-lg'>
                {app.name}
              </h4>

              <p className='flex-1 text-sm font-normal text-neutral-200'>
                {app.description}
              </p>

              <div className='mt-2 flex items-center justify-between'>
                <Link
                  href={app.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='from-purple-pink-600 to-purple-pink-500 flex items-center gap-2 bg-linear-to-r bg-clip-text text-sm font-medium text-transparent hover:opacity-80'
                >
                  <span>Visit {app.subdomain}</span>
                  <ExternalLink className='text-purple-pink-500 h-3.5 w-3.5 shrink-0' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Full-Stack System Architecture Layers */}
      <div className='gap-xl md:gap-2xl flex flex-col'>
        <div className='flex items-center gap-2'>
          <Server className='text-purple-pink-500 h-5 w-5' />
          <h3 className='text-md md:text-display-xs font-bold text-neutral-100'>
            Full-Stack Technical Architecture
          </h3>
        </div>

        <div className='gap-4xl md:gap-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {prodigiCaseStudy.architecture.map((arch, index) => (
            <div
              key={index}
              className='p-lg gap-md md:p-2xl flex flex-col rounded-4xl bg-neutral-500 transition-all duration-300 hover:bg-neutral-400'
            >
              <div className='flex items-center justify-between'>
                <div className='from-purple-pink-600 to-purple-pink-500 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r'>
                  <span className='text-xs font-bold text-white'>
                    0{index + 1}
                  </span>
                </div>
                <span className='rounded-full bg-neutral-600 px-2.5 py-0.5 text-[11px] font-medium text-neutral-100'>
                  {arch.badge}
                </span>
              </div>

              <h4 className='md:text-md mt-1 text-sm font-bold text-neutral-100'>
                {arch.layer}
              </h4>

              <p className='flex-1 text-xs leading-relaxed font-normal text-neutral-200'>
                {arch.description}
              </p>

              <div className='mt-2 flex flex-wrap gap-1.5'>
                {arch.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className='rounded-full bg-neutral-600 px-2.5 py-0.5 text-[11px] font-medium text-neutral-100'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Key Product & AI Innovations */}
      <div className='gap-xl md:gap-2xl flex flex-col'>
        <div className='flex items-center gap-2'>
          <Cpu className='text-purple-pink-500 h-5 w-5' />
          <h3 className='text-md md:text-display-xs font-bold text-neutral-100'>
            Key Product & AI Innovations
          </h3>
        </div>

        <div className='gap-4xl md:gap-3xl grid grid-cols-1 md:grid-cols-2'>
          {prodigiCaseStudy.keyFeatures.map((feat, index) => (
            <div
              key={index}
              className='p-lg gap-md md:p-3xl md:gap-xl flex flex-col rounded-4xl bg-neutral-500 transition-all duration-300 hover:bg-neutral-400'
            >
              <div className='flex items-center justify-between'>
                <span className='rounded-full bg-neutral-600 px-3 py-1 text-xs font-medium text-neutral-100'>
                  {feat.tag}
                </span>
                <CheckCircle2 className='text-purple-pink-500 h-4 w-4' />
              </div>

              <h4 className='text-md font-bold text-neutral-100 md:text-lg'>
                {feat.title}
              </h4>

              <p className='text-sm font-normal text-neutral-200'>
                {feat.description}
              </p>

              <div className='p-md flex items-start gap-2 rounded-2xl bg-neutral-600 text-xs text-neutral-100'>
                <span className='text-purple-pink-500 font-bold'>Impact:</span>
                <span className='text-neutral-200'>{feat.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
