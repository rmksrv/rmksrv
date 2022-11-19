<script>
  export let icon;
  let clazz;
  export { clazz as class };
</script>

<i class={`${icon} transform duration-200 ${clazz || ""}`} {...$$restProps} />
