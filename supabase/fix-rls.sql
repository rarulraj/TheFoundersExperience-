-- Run once in the SQL editor so public forms can insert.
grant usage on schema public to anon, authenticated;
grant insert on table public.founder_applications to anon, authenticated;
grant insert on table public.partner_applications to anon, authenticated;
grant insert on table public.event_updates to anon, authenticated;

drop policy if exists "Allow anonymous insert" on public.founder_applications;
create policy "Allow anonymous insert" on public.founder_applications
  for insert to anon, authenticated
  with check (true);

drop policy if exists "Allow anonymous insert" on public.partner_applications;
create policy "Allow anonymous insert" on public.partner_applications
  for insert to anon, authenticated
  with check (true);

drop policy if exists "Allow anonymous insert" on public.event_updates;
create policy "Allow anonymous insert" on public.event_updates
  for insert to anon, authenticated
  with check (true);
