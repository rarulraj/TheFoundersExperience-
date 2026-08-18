-- The Founders Experience — Supabase schema
-- Run this in the Supabase SQL editor (safe to re-run).

-- Founder / member applications
create table if not exists founder_applications (
  id uuid primary key default gen_random_uuid(),
  type text not null default 'founder_application',
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  linkedin_url text,
  company_name text,
  company_website text,
  role_title text,
  company_stage text,
  company_location text,
  industry text,
  number_of_employees text,
  what_building text,
  hoping_to_get text,
  could_contribute text,
  how_did_you_hear text,
  agree_to_updates boolean default false,
  submitted_at timestamptz not null,
  created_at timestamptz default now(),
  status text not null default 'new',
  notes text
);

-- Partner / sponsor applications
create table if not exists partner_applications (
  id uuid primary key default gen_random_uuid(),
  type text not null default 'partner_application',
  first_name text not null,
  last_name text not null,
  work_email text not null,
  phone text,
  company text,
  website text,
  job_title text,
  company_type text,
  partnership_interest text,
  estimated_budget text,
  partnership_goals text,
  anything_else text,
  submitted_at timestamptz not null,
  created_at timestamptz default now(),
  status text not null default 'new',
  notes text
);

-- Event update subscribers
create table if not exists event_updates (
  id uuid primary key default gen_random_uuid(),
  type text not null default 'event_updates',
  email text not null,
  name text,
  submitted_at timestamptz not null,
  created_at timestamptz default now()
);

alter table founder_applications add column if not exists phone text;
alter table founder_applications add column if not exists status text;
alter table founder_applications add column if not exists notes text;
alter table partner_applications add column if not exists phone text;
alter table partner_applications add column if not exists status text;
alter table partner_applications add column if not exists notes text;

update founder_applications set status = 'new' where status is null;
update partner_applications set status = 'new' where status is null;

alter table founder_applications alter column status set default 'new';
alter table partner_applications alter column status set default 'new';

-- Indexes for common lookups
create index if not exists founder_applications_email_idx on founder_applications(email);
create index if not exists founder_applications_status_idx on founder_applications(status);
create index if not exists partner_applications_email_idx on partner_applications(work_email);
create index if not exists partner_applications_status_idx on partner_applications(status);
create index if not exists event_updates_email_idx on event_updates(email);

-- Row Level Security
alter table founder_applications enable row level security;
alter table partner_applications enable row level security;
alter table event_updates enable row level security;

-- Allow anonymous inserts only (forms are public).
-- No public read/update/delete — review rows in the Table Editor.
drop policy if exists "Allow anonymous insert" on founder_applications;
create policy "Allow anonymous insert" on founder_applications
  for insert with check (true);

drop policy if exists "Allow anonymous insert" on partner_applications;
create policy "Allow anonymous insert" on partner_applications
  for insert with check (true);

drop policy if exists "Allow anonymous insert" on event_updates;
create policy "Allow anonymous insert" on event_updates
  for insert with check (true);
